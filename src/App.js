
import './App.css';
import {Typography, Card, CardMedia, CardContent, CardActionArea} from "@mui/material";

function App() {

 return (
    <div className="App">
      <header className="App-header">
        <h1>Shaindy's Page</h1>
      </header>
      <table>
        <tr>
          <td colSpan={3}>
            <h4>Shaindy is a senior at Touro College studying Computer Science. She speaks two languages, English and Hebrew, and her favorite color is teal. In her free time, Shaindy enjoys listening to music and spending time with her friends and family. In addition, whenever she has the opportunity she enjoys traveling different countries and experiencing various cultures.
          </h4>
          </td>
        </tr>
        <tr>
        <td colSpan={3}>
        <hr></hr>
        </td>
        </tr>
        <tr>
        <td colSpan={3}><h4>Some countries Shaindy has been to:</h4></td>
        </tr>
        <tr>
          <td>
            <MyCard img='https://www.bestcustomflags.com/wp-content/uploads/2016/06/south-africa-flag.jpg' 
            content='SOUTH AFRICA'></MyCard>
          </td>
          <td>
            <MyCard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJIn-RNLwRLpl3p2RvZEB38i9jzdZ_qYiHm1jjzw7fPxpVYwaZu_q5FQ1jvx8Cu4o_dbg&usqp=CAU' content='GUATEMALA'> </MyCard>
          </td>
          <td>
            <MyCard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjA-imZqFx9MjozZ2DSvfjJmy8VMH4n0zB4A&usqp=CAU' content='COSTA RICA'></MyCard>
          </td>
        </tr>
        <tr>
          <td>
            <MyCard img='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png' content='MEXICO'></MyCard>
          </td>
          <td>
            <MyCard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8vJOOt6eAcPvaTFww98xf6zOM8PNkxwJShw&usqp=CAU' content='SCOTLAND'></MyCard>
          </td>
          <td>
            <MyCard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPzLhNUUVTWxlfnx0EwHRZyrE-addwIgANqQ&usqp=CAU' content='ITALY'></MyCard>
          </td>
        </tr>
        <tr>
          <td>
            <MyCard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3J3aOnV3KjgN8se2EnLH98yXiuIOHSt9HKg&usqp=CAU' content='SPAIN'></MyCard>
          </td>
          <td>
            <MyCard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-quU7OrgabCjRp2WyHLfp5RT2CRjdZbq-aA&usqp=CAU' content='AUSTRALIA'></MyCard>
          </td>
          <td>
            <MyCard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNSHW244zlNKC8ORvSJprDZSCyofKa_Wr3w&usqp=CAU' content='UKRAINE'></MyCard>
          </td>
        </tr>  
      </table>      
    </div>   
  );
}

function MyCard(props){
  return(
    <Card>
     <CardActionArea>
       <CardMedia 
         component='img'
         image= {props.img}
         title='SOUTH AFRICA' height='150' width='200'
      />
     <CardContent>
      <Typography gutterBottom variant='h5' component='h2'>{props.content}</Typography> 
      </CardContent>
      </CardActionArea>
    </Card>
  );
  }

  function handleClick(){
  
  return(
  <table>
    <tr>
        <td colSpan={3}><h2>Some countries Shaindy has been to:</h2></td>
        </tr>
        <tr>
          <td>
            <MyCard img='https://www.bestcustomflags.com/wp-content/uploads/2016/06/south-africa-flag.jpg' 
            content='SOUTH AFRICA'></MyCard>
          </td>
          <td>
            <MyCard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJIn-RNLwRLpl3p2RvZEB38i9jzdZ_qYiHm1jjzw7fPxpVYwaZu_q5FQ1jvx8Cu4o_dbg&usqp=CAU' content='GUATEMALA'> </MyCard>
          </td>
          <td>
            <MyCard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjA-imZqFx9MjozZ2DSvfjJmy8VMH4n0zB4A&usqp=CAU' content='COSTA RICA'></MyCard>
          </td>
        </tr>
        <tr>
          <td>
            <MyCard img='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png' content='MEXICO'></MyCard>
          </td>
          <td>
            <MyCard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8vJOOt6eAcPvaTFww98xf6zOM8PNkxwJShw&usqp=CAU' content='SCOTLAND'></MyCard>
          </td>
          <td>
            <MyCard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPzLhNUUVTWxlfnx0EwHRZyrE-addwIgANqQ&usqp=CAU' content='ITALY'></MyCard>
          </td>
        </tr>
        <tr>
          <td>
            <MyCard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3J3aOnV3KjgN8se2EnLH98yXiuIOHSt9HKg&usqp=CAU' content='SPAIN'></MyCard>
          </td>
          <td>
            <MyCard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-quU7OrgabCjRp2WyHLfp5RT2CRjdZbq-aA&usqp=CAU' content='AUSTRALIA'></MyCard>
          </td>
          <td>
            <MyCard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNSHW244zlNKC8ORvSJprDZSCyofKa_Wr3w&usqp=CAU' content='UKRAINE'></MyCard>
          </td>
        </tr>  
    </table>

  );
  }



    


export default App;
