import styled, { css } from 'styled-components'

interface PlatformProps{
  platform:'PC'|'mobile'
}

const Media=styled.div<PlatformProps>`
  ${props=>{
    if(props.platform==='PC'){
      return css `@media screen and (max-width:600px) {
    display: none;
  };
  display:block;
      `
    }
    else{
      return css `@media screen and (max-width:600px) {
        display: block;
      };
      display:none;
          `
    }
  }}`
export default Media