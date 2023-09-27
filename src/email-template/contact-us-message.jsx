import * as React from "react";
// import {
//   Html,
//   Body,
//   Container,
//   Head,
//   Heading,
//   Hr,
//   Preview,
//   Text,
//   Tailwind,
// } from "@react-email/components";

import { Html } from "@react-email/html";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Heading } from "@react-email/heading";
import { Hr } from "@react-email/hr";
import { Preview } from "@react-email/preview";
import { Text } from "@react-email/text";
import { Tailwind } from "@react-email/tailwind";

export const ContactUsEmailTemplate = ({
  username = "CseZain",
  email = "csezain@gmail.com",
  message = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quos aspernatur id? Eaque maiores nulla dolor soluta aliquid architecto tempore perferendis similique. Omnis quisquam quam expedita ab autem nam, ipsa ullam sint harum voluptate ipsum accusamus repellat, sapiente at laborum hic repellendus maxime atque, rerum fugit facilis error neque nobis. Maxime quo voluptatem quis et molestias quidem praesentium enim optio, rem, harum, magnam sequi. Delectus quisquam impedit omnis, numquam possimus asperiores perferendis ab maiores libero deserunt porro placeat. Inventore officia libero praesentium doloremque minus quibusdam nulla repellendus odio vel est eveniet modi ad quasi dignissimos sunt, doloribus quod placeat exercitationem quis mollitia officiis in. Asperiores veritatis nemo nam excepturi. Nobis iste veniam ratione qui dolor vero incidunt est tempora ducimus odit! Modi, possimus quidem atque reprehenderit minima officia quaerat deleniti, aperiam ducimus incidunt perspiciatis ipsum nihil non nisi? Est accusantium similique illo officia possimus, quisquam temporibus quod repellat tenetur nihil ad eveniet ipsa rerum iusto amet inventore in placeat nam at numquam culpa. Aliquid cum a eius, ex praesentium molestiae est iure deleniti impedit minima minus, labore porro sit unde odio nostrum temporibus ut fugit voluptate! Quisquam quam velit itaque qui distinctio, nam assumenda commodi cum, in unde quae non. Exercitationem sunt recusandae quis suscipit optio numquam sequi perferendis error adipisci modi! Esse, quam consequuntur modi odit deserunt quo debitis aliquid reprehenderit fugiat quisquam mollitia, dignissimos maxime animi. Iusto nesciunt esse molestias? Earum corporis ducimus similique sed autem at fuga nam, magni enim perferendis? Magnam impedit nisi, repudiandae odio, fuga iure maxime minima sapiente molestiae quas ea obcaecati deleniti ab molestias doloremque. Et eos nemo harum ducimus atque velit adipisci explicabo quisquam architecto beatae. Quod tenetur, reprehenderit voluptas quasi autem itaque deleniti eligendi, molestiae ab facilis quo necessitatibus nam eos perferendis similique beatae placeat dicta eius? Recusandae eius voluptas asperiores.",
}) => {
  const previewText = `${username} sent you a message!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Heading className="text-gray-900 text-[24px] font-normal text-center p-0 mt-[30px] mx-0">
              Message by <strong>{username}</strong>
            </Heading>
            <Text className="tex-sm text-center mt-2">
              {" "}
              from Saqib Chaudhary Website
            </Text>
            <Text className="text-gray-900 text-[14px] leading-[24px] px-5 text-center font-bold">
              {email}
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-gray-900 text-xl leading-[24px] px-5 text-center font-bold">
              Message
            </Text>
            <Text className="text-gray-900 text-[14px] leading-[24px] px-5">
              {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactUsEmailTemplate;
