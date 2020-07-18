import {db} from '../../lib/firebase';

export default (req, res) => { 
  if (!req.query.id) {
    return res.status(400).json({
      error: 'Missing "id" query parameter'
    });
  }

  const ref = db.ref(`shared/${req.query.id}`);

  return ref.once('value', (snapshot) => { 
    res.status(200).json({
      total: snapshot.val()
    });
  });
};