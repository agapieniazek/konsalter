import React from 'react';

function Footer() {
  const showRodo=()=>{
    window.alert("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam tempora tempore, maiores tenetur, inventore distinctio voluptatum dolor harum quos, ullam sit quisquam consequatur nihil! Harum sapiente reprehenderit quod optio eligendi")
  }

  return <div className='footer'>
            <p onClick={showRodo}>RODO</p>
          <p>&copy; Agnieszka Pieniążek 2022</p>
  </div>;
}

export default Footer;
