const pool = require('../config/db');

// Simple booking: expects patient_id, doctor_id, appointment_time (ISO string)
exports.book = async (req, res) => {
  try {
    const { patient_id, doctor_id, appointment_time, notes } = req.body;
    if (!patient_id || !doctor_id || !appointment_time) return res.status(400).json({ message: 'Missing required fields' });

    // check conflict
    const [conflict] = await pool.query(
      'SELECT id FROM appointments WHERE doctor_id = ? AND appointment_time = ?',
      [doctor_id, appointment_time]
    );
    if (conflict.length) return res.status(409).json({ message: 'Slot already booked' });

    const [result] = await pool.query(
      'INSERT INTO appointments (patient_id, doctor_id, appointment_time, notes) VALUES (?,?,?,?)',
      [patient_id, doctor_id, appointment_time, notes || null]
    );
    res.status(201).json({ id: result.insertId, patient_id, doctor_id, appointment_time });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.list = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM appointments ORDER BY appointment_time DESC LIMIT 200');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;
    await pool.query('UPDATE appointments SET status = ? WHERE id = ?', [status, id]);
    res.json({ message: 'Updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
