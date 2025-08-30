import Link from 'next/link';
import Layout from '../../../../components/layout';
import Image from 'next/image';
import avatar from './images/upon-this-mortar-i-build-my-empire.jpg'

function Profile_image (){
  return (
    
    <Image src={avatar} width={144} height={144} alt="moi" />
    
  )

}

export default function FirstPost() {
    return (
      <Layout>
      
      <h1>About us</h1>

      <Profile_image />

      
      </Layout>
    );
  }

 
