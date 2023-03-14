import config from '../../../config.json';
import styled from 'styled-components';

const StyledComponent = styled.div`
   img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
   }

   .user-info {
      margin-top: 50px;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px;
      gap: 16px;
   }
`;

function Header() {
   return (
      <StyledComponent>
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