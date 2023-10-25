import { Header } from "@/components/Header/Header";
import { TitleNotFound, MessageNotFound } from "@/styles/theme";
import styled from "styled-components";

export default function page404() {
  return (
    <div className={'content'}>
      <Header />
        <TitleNotFound>
        <div className="title">
          <h1 className="headline-title">
            Ops
          </h1>
        </div>
      </TitleNotFound>

      <MessageNotFound>
        <div className="message">
          <p className={'text'}>
            Este pokemon não foi<br />encontrado ;(
          </p>
        </div>
      </MessageNotFound>
    </div>
  )
}
