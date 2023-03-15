import config from '../../../config.json';
import styled from 'styled-components';

const StyledComponent = styled.div`
   img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
   }

   .user-info {      
      display: flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px;
      gap: 16px;
   }
`;

const StyledBanner = styled.div`
background-color: blue;
background-image: url(${"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}); 
height: 230px;
`;


function Header() {
   return (
      <StyledComponent>
         <StyledBanner />
         <section className="user-info">
            <img src={`http://github.com/${config.github}.png`}></img>
            <div>
               <h2>
                  {config.name}
               </h2>
               <p>
                  {config.job}
               </p>
            </div>
         </section>
      </StyledComponent>
   );
}

export default Header;