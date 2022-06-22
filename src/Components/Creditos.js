import React from "react"
import styled from "styled-components"

const BoxCreditos = styled.div`
  width: 100%;
  height: 7vh;
  background-color: #446061;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.3vh;
`
export default function Creditos() {
  return (
    <>
      <BoxCreditos>
        <p>
          Layout produzido por Vai na Web para fins exclusivamente educacionais.
          Referência:
          https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/
        </p>
      </BoxCreditos>
    </>
  )
}