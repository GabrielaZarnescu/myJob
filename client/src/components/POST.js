import {Card, CardText, CardBody, CardLink,CardTitle, CardImg,Nav, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom'
export const POST=({_id,progLang,workTime,location,description})=>{
    return( <Card style={{}} key={_id} className="cards">
    <CardBody>
      <CardTitle tag="h5" style={{textAlign:'center'}}>OFFER</CardTitle>
    </CardBody>
    <CardBody>
      {/*<CardText style={{textAlign:'center'}}> <Link to={`details/${_id}`}>{name}</Link> 
      </CardText> */}
      <CardText style={{textAlign:'center'}}>
          Programming language: {progLang}
          <br/>
          work time: {workTime}
          <br/>
          Location: {location}
          <br/>
          Job description: {description}
      </CardText>

    </CardBody>
  </Card>);
}