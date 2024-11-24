// feedbackController.js
import Feedback from '../models/Feedback.js';

export const submitFeedback = async (req, res) => {
  const { text } = req.body;
  const feedback = await Feedback.create({ text });
  res.json(feedback);
};

export const respondFeedback = async (req, res) => {
  const { id } = req.params;
  const { response } = req.body;
  const feedback = await Feedback.findByPk(id);
  if (feedback) {
    feedback.response = response;
    await feedback.save();
    res.json(feedback);
  } else {
    res.status(404).json({ message: 'Feedback not found' });
  }
};