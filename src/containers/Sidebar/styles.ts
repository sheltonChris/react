import styled from "styled-components";

export const ButtonTheme = styled.button `
font-size: 10px;
padding: 8px;
border-radius: 12px;
color:#eee;
font-weight: bold;
background-color: #282a35;
cursor: pointer;

@media (max-width:768px) {
  margin-bottom: 20px;
}
`

export const SidebarContainer = styled.div`
position: sticky;
top: 80px;
left: 0;

`
