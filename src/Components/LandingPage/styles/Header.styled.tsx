import styled from "styled-components";


export const StyleHeader = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

    background-color: #f5f5f5;
    margin: 0 auto;
         
    .navbar-link {
        display: flex;
      }

      /* Media query for screen size 768px and smaller */
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
`

export const Navbar = styled.nav`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f5f5f5;
        padding-top: 1rem;
        padding-left: 4rem;
        padding-right: 4rem;
        margin: 0;

        /* Media query for screen size 768px and smaller */
        @media (max-width: 800px) {
          flex-direction: column;
          align-items: center;
        }
`

export const CompanyId = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
        display: flex;
        justify-content: center;
        align-items: center;
        width: 12rem;
        margin-bottom: 20px;

        /* Media query for screen size 768px and smaller */
        @media (max-width: 768px) {
          flex-direction: row;
          align-items: center;
          padding-right: 2.5rem;
        }

`

export const Logo = styled.img`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
        width: 45px;
        height: 45px;
        object-fit: cover;
        border-radius: 50%;
`
export const CompanyName = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
        font-family: "inter";
        font-size: 1.5rem;
        font-weight: 700;
        color: #081C15;
        margin-left: 1rem;
`

export const UList = styled.ul`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

        list-style: none;
        margin: 0;
        padding: 0rem 0rem 1rem 0rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 27rem;
        white-space: normal;



`

export const NavbarLinks = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

        display: flex;
        
        a {
            color: #333;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s;
          }

          a:hover {
            color: #777;
          }



`

export const List = styled.li`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
        a {
            font-family: "inter";
            font-weight: 600;
            font-size: 1rem;
            letter-spacing: .15px;
            color: #081C15;
            line-height: 1.4rem;
        }

`
