import {  Card, List } from 'antd';
import { data } from '../../Components/data';
import Meta from 'antd/es/card/Meta';



export function Home() {
  
  return (
    <div>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Sedgwick+Ave&display=swap')
</style>
      <div className="h-screen flex items-center max-w-screen  mr-40">
      <div className="max-w-sm mx-auto ">
        <h1 className="bold text-5xl mb-5 text-gray-800" style={{ fontFamily: "'Sedgwick Ave', cursive" }}>I'm a full stack developer</h1>
        <small className="block mt-2">Hello! I'm Jesus Alvarado, a student of Systems Engineering at Universidad Metropolitana. I have skills in both backend and frontend development. I'm familiar with technologies such as React.js, TypeScript, Python, Java, and SQL. Additionally, I have experience working with various databases, including some non-relational ones. I'm committed to continuing to learn and grow in this exciting field.</small>
      </div>
        <div className="h-60">
  <img

    className="max-h-full max-w-full "
    src="https://i.pinimg.com/originals/ab/a7/b3/aba7b3e17c2f0ac97607a15245922979.jpg"
    alt=""
    style={{ maskImage: 'linear-gradient(white 80%, transparent)' }}
  />
</div>
      </div>
    
      <List className="all-center max-w-screen-lg mx-auto "
      grid={{ gutter: [20,20], column: 3 }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item key={item.id}
        className='max-h-full'>
        <Card
   
        size='small'
    style={{ width: 300, height:515, overflow: 'hidden'}}
    cover={
      <img
      className='max-h-40'

        src={item.img}
      />
    }
   
  >
    <Meta
       title={<a href={item.url} target="_blank">{item.name}</a>}
       description={
        <span>
          {item.description_short}
          {' '}
          {item.link && <a className="text-blue-500 hover:text-blue-700" href={item.link}>Link para ir a la página</a>} </span>
        }
    />
  </Card>
        </List.Item>
      )}
    />
      

            
        
      
    </div>
  );
}
