
// Routes for express app

import unsupportedMessage  from '../db/unsupportedMessage';
import { controllers }     from '../db';

const topicsController = controllers && controllers.topics;

export default (app) => {

  // topic routes
  if (topicsController) {
    app.get('/topic',        topicsController.all);
    app.post('/topic/:id',   topicsController.add);
    app.put('/topic/:id',    topicsController.update);
    app.delete('/topic/:id', topicsController.remove);
  } else {
    console.warn(unsupportedMessage('topics routes'));
  }
};
