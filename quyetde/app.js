
const express = require('express');
const bodyParser = require('body-parser');
const fs= require("fs");
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('/',(req, res)=>{
    
    const fileData= fs.readFileSync('question.txt', {encoding:'utf-8'});
    let questionList=[];
    if(fileData){
        questionList=JSON.parse(fileData);

    }
    if(questionList.length==0){
        res.send("Question bank empty");
    }
    else{
        const randomQuestion = questionList[Math.floor(Math.random()*questionList.length)];
        res.send(`
        <h1>
        ${randomQuestion.content}
        </h1>
        <form action="/vote" method="POST">
        <input type="hidden" name="id" value="${randomQuestion.id}">
        <button type="submit" value="no" name="vote">Sai</button>
       <button type="submit" value="yes" name="vote">Đúng</button>

        </form>
        <button>Kết quả</button>
        <button>Câu hỏi khác</button>
        `);
    }
});
app.get('/ask',(req, res)=>{
    res.sendFile(__dirname+'/views/ask.html');
});
app.get('/vote/:questionId/:vote', (req, res)=>{
    console.log(req.params);
    const questionId = req.params.questionId;
    const fileData= fs.readFileSync('question.txt', {encoding:'utf-8'});
    let questionList=[];
    if(fileData){
        questionList=JSON.parse(fileData);
    }
    questionList[questionId].yes+=1;
    fs.writeFileSync('question.txt',JSON.stringify(questionList));
    res.redirect('/');
});

app.post('/vote', (req,res)=>{
    console.log(req.body);
    const fileData= fs.readFileSync('question.txt', {encoding:'utf-8'});
    let questionList=[];
    const vote = req.body.vote;
    const id = req.body.id;

    
    if(fileData){
        questionList=JSON.parse(fileData);
    }
    if(vote == 'no'){
        questionList[id].no+=1;
    }else{
        questionList[id].yes+=1;
    }
    fs.writeFileSync('question.txt',JSON.stringify(questionList));
    res.redirect('/');
});

// app.get('/ask',(req, res)=>{
//     res.sendFile(__dirname+'/view/ask.html');
// });
app.post('/addquestion',(req, res)=>{
    const fileData= fs.readFileSync('question.txt', {encoding:'utf-8'});
    let questionList= [];
    
    if(fileData){
        questionList=JSON.parse(fileData);
    }
    const question={
        id: questionList.length,
        yes: 0,
        no: 0,
        content: req.body.question
    }
    questionList.push(question);
    fs.writeFileSync('question.txt',JSON.stringify(questionList));
    res.redirect('/');
});
app.post('/addquestion',(req, res)=>{
    console.log(req.body);
});

app.use('/public',express.static('public'));
const port = 6661;
app.listen(port, (err)=>{
    if(err) console.log(err)
    else console.log("server start success")
});