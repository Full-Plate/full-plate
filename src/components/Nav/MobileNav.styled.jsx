import styled from "styled-components";

export const Ul = styled.ul `

list-style: none;
/* position: absolute; */
display: none;





div.navLinks {
 
  z-index: 10;
  text-align: center;
  padding-top: 10px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  /* width: 356px; */
  /* height: 896px; */
  /* background-color: #FEFEFE;
  box-shadow: 0px 3px 25px rgba(102, 112, 133, 0.25);
  border-radius: 0px 20px 20px 0px; */
  left: 0;
  transition: transform 0.3s;
}

.linksContainerOne {
  margin-bottom: 30px;
  width: 100%;
}


.linksContainerTwo {
  margin-bottom: 30px;
}

li.items {
  margin-top: 10px;
  

}






@media (max-width: 900px) {
  display: ${({ close }) => close ? 'flex': 'flex'};
  transform: ${({ close }) => close ? 'translateX(0)' : 'translateX(-100%)'};
  position: fixed;
  width: 356px;
  height: 896px;
  top: 115px;
  left: 0;
  background-color: #FEFEFE;
  box-shadow: 0px 3px 25px rgba(102, 112, 133, 0.25);
  border-radius: 0px 20px 20px 0px;
  
  transition: transform 0.3s;
 

  li.divider {
  margin-top: 20px;
  position: absolute;
  width: 356px;
  border: 1px solid rgba(102, 112, 133, 0.25);
  height: 2px;
  left: 0;
  
}
}











`

