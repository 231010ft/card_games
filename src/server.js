const express = require('express');
const app = express();
const cors = require('cors'); // クライアントからのクロスオリジンリクエストを許可

app.use(cors()); // 全てのオリジンからのリクエストを許可 (開発環境向け)
app.use(express.json());
const port = 3333;

// GETリクエストの基本的なエンドポイント
app.get('/', (req, res) => {
  res.send('Hello from the Server!');
});

// POSTリクエストを受け付けるエンドポイントの例
app.post('/api/data', (req, res) => {
  console.log('Received data:', req.body);
  // ここで受信したデータを処理する（例：データベースに保存するなど）
  const receivedData = req.body;
  res.json({ message: 'Data received successfully!', data: receivedData });
});

app.listen(port, () => {
  console.log("Server running on PORT:" + port);
});