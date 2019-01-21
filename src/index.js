import dva from 'dva';
import './index.css';

// 1. Initialize
// const app = dva();
const app = dva({
  initialState: {
    products: [{
      name: 'dva2',
      id: 1
    }, {
      name: 'antd2',
      id: 2
    }]
  }
})

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
