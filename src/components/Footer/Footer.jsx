import React from "react"
import { Stack } from "@chakra-ui/react"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="sb_footer section_padding">
          <div className="sb_footer-links-div">
            <h4>Lucas Caldas</h4>
            <a href="">
              <p>LinkedIn</p>
            </a>
            <a href="">
              <p>Email</p>
            </a>
            <a href="">
              <p>Github</p>
            </a>
            <a href="">
              <p>Instagram</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Leonardo Lucas</h4>
            <a href="">
              <p>LinkedIn</p>
            </a>
            <a href="">
              <p>Email</p>
            </a>
            <a href="">
              <p>Github</p>
            </a>
            <a href="">
              <p>Instagram</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Joedson</h4>
            <a href="">
              <p>LinkedIn</p>
            </a>
            <a href="">
              <p>Email</p>
            </a>
            <a href="">
              <p>Github</p>
            </a>
            <a href="">
              <p>Instagram</p>
            </a>
          </div>
        </div>

        <hr /><hr />

        <div className="sb_footer-bellow">
            <div className="sb__footer-copyright">
              <p>
                 @{new Date().getFullYear} Logo+. Todos os Direitos Reservados (ou não).
              </p>
            </div>
            <div className="sb__footer-bellow-links">
                <a href="/terms"><div><p>Termos & Condições</p></div></a>
                <a href="/terms"><div><p>Privacidade</p></div></a>
                <a href="/terms"><div><p>Segurança</p></div></a>
                <a href="/terms"><div><p></p>Cookies</div></a>
            </div>
        </div>
      </div>

    </>
  )
}

export default Footer

