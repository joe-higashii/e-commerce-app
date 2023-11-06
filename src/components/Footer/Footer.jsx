import React from "react";
import { Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import {
  FaGitkraken,
  FaInstagram,
  FaGit,
  FaMailBulk,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Flex
          mt={"4rem"}
          justifyContent={"space-between"}
          className="sb_footer section_padding"
        >
          <Flex
            mb={"1rem"}
            alignItems={"flex-start"}
            flexDir={"column"}
            className="sb_footer-links-div"
          >
            <Text mb={".5rem"}>
              <strong>Bernardo Siqueira</strong>
            </Text>
            <a href="">
              <Text fontSize={".9rem"}> LinkedIn</Text>
            </a>
            <a href="">
              <Text fontSize={".9rem"}>Email</Text>
            </a>
            <a href="">
              <Text fontSize={".9rem"}>Github</Text>
            </a>
            <a href="">
              <Text fontSize={".9rem"}>Instagram</Text>
            </a>
          </Flex>
          <Flex
            mb={"1rem"}
            alignItems={"flex-start"}
            flexDir={"column"}
            className="sb_footer-links-div"
          >
            <Text mb={".5rem"}>
              <strong>Gabriel Garcia</strong>
            </Text>
            <a href="">
              <Text fontSize={".9rem"}> LinkedIn</Text>
            </a>
            <a href="">
              <Text fontSize={".9rem"}>Email</Text>
            </a>
            <a href="">
              <Text fontSize={".9rem"}>Github</Text>
            </a>
            <a href="">
              <Text fontSize={".9rem"}>Instagram</Text>
            </a>
          </Flex>
          <Flex
            mb={"1rem"}
            alignItems={"flex-start"}
            flexDir={"column"}
            className="sb_footer-links-div"
          >
            <Text mb={".5rem"}>
              <strong>Joedson </strong>
            </Text>
            <a
              href="https://www.linkedin.com/in/joedson-mendes-de-amorim/"
              target="_blank"
            >
              <Text fontSize={".9rem"}> LinkedIn</Text>
            </a>
            <a href="">
              <Text fontSize={".9rem"}>Email</Text>
            </a>
            <a href="https://github.com/joe-higashii" target="_blank">
              <Text fontSize={".9rem"}>Github</Text>
            </a>
            <a href="">
              <Text fontSize={".9rem"}>Instagram</Text>
            </a>
          </Flex>
          <Flex
            mb={"1rem"}
            alignItems={"flex-start"}
            flexDir={"column"}
            className="sb_footer-links-div"
          >
            <Text mb={".5rem"}>
              <strong>Leonardo Lucas</strong>
            </Text>
            <a href="">
              <Text fontSize={".9rem"}> LinkedIn</Text>
            </a>
            <a href="">
              <Text fontSize={".9rem"}>Email</Text>
            </a>
            <a href="">
              <Text fontSize={".9rem"}>Github</Text>
            </a>
            <a href="">
              <Text fontSize={".9rem"}>Instagram</Text>
            </a>
          </Flex>
          <Flex
            mb={"1rem"}
            alignItems={"flex-start"}
            flexDir={"column"}
            className="sb_footer-links-div"
          >
            <Text mb={".5rem"}>
              <strong>Lucas Caldas</strong>
            </Text>
            <a href="">
              <Text fontSize={".9rem"}> LinkedIn</Text>
            </a>
            <a href="">
              <Text fontSize={".9rem"}>Email</Text>
            </a>
            <a href="">
              <Text fontSize={".9rem"}>Github</Text>
            </a>
            <a href="">
              <Text fontSize={".9rem"}>Instagram</Text>
            </a>
          </Flex>
          <Flex
            mb={"1rem"}
            alignItems={"flex-start"}
            flexDir={"column"}
            className="sb_footer-links-div"
          >
            <Text mb={".5rem"}>
              <strong>Samara </strong>
            </Text>
            <a href="">
              <Text fontSize={".9rem"}> LinkedIn</Text>
            </a>
            <a href="">
              <Text fontSize={".9rem"}>Email</Text>
            </a>
            <a href="">
              <Text fontSize={".9rem"}>Github</Text>
            </a>
            <a href="">
              <Text fontSize={".9rem"}>Instagram</Text>
            </a>
          </Flex>
          <Flex
            mb={"1rem"}
            alignItems={"flex-start"}
            flexDir={"column"}
            className="sb_footer-links-div"
          >
            <Text fontSize={"2rem"} mb={".5rem"}>
              <strong>
                <FaGitkraken /> KRAKEN
              </strong>
            </Text>
            <Flex gap={".5rem"}>
              <a href="">
                <IconButton icon={<FaLinkedin />}> LinkedIn</IconButton>
              </a>
              <a href="">
                <IconButton icon={<FaMailBulk />}>Email</IconButton>
              </a>
              <a href="https://github.com/joe-higashii/e-commerce-app" target="blank">
                <IconButton icon={<FaGit />}>Github</IconButton>
              </a>
              <a href="">
                <IconButton icon={<FaInstagram />}>Instagram</IconButton>
              </a>
            </Flex>
          </Flex>
        </Flex>

        <hr />
        <hr />

        <Flex
          mt={"1rem"}
          justifyContent={"space-between"}
          className="sb_footer-bellow"
        >
          <Flex className="sb__footer-copyright">
            <p>
              <strong>2023 KRAKEN. Todos os Direitos Reservados</strong>
            </p>
          </Flex>
          <Flex gap={"1rem"} className="sb__footer-bellow-links">
            <a href="/terms">
              <div>
                <p>
                  <strong>Termos & Condições</strong>
                </p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>
                  <strong>Privacidade</strong>
                </p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>
                  <strong>Segurança</strong>
                </p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p></p>
                <strong>Cookies</strong>
              </div>
            </a>
          </Flex>
        </Flex>
      </div>
    </>
  );
};

export default Footer;
