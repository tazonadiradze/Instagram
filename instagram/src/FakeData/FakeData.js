import faker from 'faker';
export default function FakeData() {

 const name = faker.name.findName();
 return (
  <div>
   {name}
  </div>
 )
}
