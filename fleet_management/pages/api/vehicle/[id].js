export default function getVehicle(req, res) {
  // if (req.method !== 'GET') {
  //   res.status(500).json({ message: 'Only Get Accepted' });
  // }

  res.json({ byId: req.query.id, message: 'getVehiclebyId' });
}
