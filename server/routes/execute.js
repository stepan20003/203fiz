const express = require('express');
const router = express.Router();
const db = require('../db');
const authMiddleware = require('../middleware/auth');

// Mock Run Execution (Protected)
router.post('/:workflowId/run', authMiddleware, async (req, res) => {
  const workflowId = req.params.workflowId;
  const { nodes, connections } = req.body;

  try {
    // Check ownership
    const workflow = await db.query('SELECT * FROM workflows WHERE id = $1 AND user_id = $2', [workflowId, req.user.id]);
    if (workflow.rows.length === 0) return res.status(403).json({ message: 'Մուտքը մերժված է:' });

    console.log(`Գործարկվում է աշխատանքային հոսքը: ${workflowId}`);
    const logs = [];

    // Very simple BFS execution simulation
  const startNode = nodes.find(n => n.type === 'webhook');
  if (!startNode) {
     return res.status(400).json({ message: 'Գործարկիչ (Trigger) չի գտնվել:' });
  }

  logs.push({ node: startNode.name, status: 'Հաջողված', time: new Date().toISOString() });

  let currentNodeId = startNode.id;
  let nextConnection = connections.find(c => c.sourceId === currentNodeId);

  while (nextConnection) {
     const nextNode = nodes.find(n => n.id === nextConnection.targetId);
     if (nextNode) {
        logs.push({ node: nextNode.name, status: 'Հաջողված', time: new Date().toISOString() });
        currentNodeId = nextNode.id;
        nextConnection = connections.find(c => c.sourceId === currentNodeId);
     } else {
        break;
     }
  }

    res.json({
      message: 'Աշխատանքային հոսքը հաջողությամբ գործարկված է:',
      executionLogs: logs
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Սերվերի սխալ:' });
  }
});

module.exports = router;
