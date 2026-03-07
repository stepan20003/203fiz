const express = require('express');
const router = express.Router();
const db = require('../db');

// Get nodes and connections for a workflow
router.get('/:workflowId', async (req, res) => {
  const workflowId = req.params.workflowId;
  try {
    // Check ownership
    const workflow = await db.query('SELECT * FROM workflows WHERE id = $1 AND user_id = $2', [workflowId, req.user.id]);
    if (workflow.rows.length === 0) return res.status(403).json({ message: 'Մուտքը մերժված է:' });

    const nodes = await db.query('SELECT * FROM nodes WHERE workflow_id = $1', [workflowId]);
    const connections = await db.query('SELECT * FROM connections WHERE workflow_id = $1', [workflowId]);
    res.json({ nodes: nodes.rows, connections: connections.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Սերվերի սխալ:' });
  }
});

// Update nodes and connections for a workflow (Save)
router.post('/:workflowId/save', async (req, res) => {
  const workflowId = req.params.workflowId;
  const { newNodes, newConnections } = req.body;

  try {
    // Check ownership
    const workflow = await db.query('SELECT * FROM workflows WHERE id = $1 AND user_id = $2', [workflowId, req.user.id]);
    if (workflow.rows.length === 0) return res.status(403).json({ message: 'Մուտքը մերժված է:' });

    await db.query('BEGIN');

    // Delete existing nodes and connections
    await db.query('DELETE FROM connections WHERE workflow_id = $1', [workflowId]);
    await db.query('DELETE FROM nodes WHERE workflow_id = $1', [workflowId]);

    // Insert new nodes
    for (const node of newNodes) {
      await db.query(
        'INSERT INTO nodes (id, workflow_id, type, name, position_x, position_y, config) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [node.id, workflowId, node.type, node.name, node.x, node.y, JSON.stringify(node.config)]
      );
    }

    // Insert new connections
    for (const conn of newConnections) {
      await db.query(
        'INSERT INTO connections (id, workflow_id, source_node_id, target_node_id) VALUES ($1, $2, $3, $4)',
        [conn.id, workflowId, conn.sourceId, conn.targetId]
      );
    }

    await db.query('COMMIT');
    res.json({ message: 'Պահպանված է:' });
  } catch (error) {
    await db.query('ROLLBACK');
    console.error(error);
    res.status(500).json({ message: 'Սերվերի սխալ:' });
  }
});

module.exports = router;
