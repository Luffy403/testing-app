import styled from "@emotion/styled";

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 10px 30px 10px 0;
`;
const HeaderAva = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
`;
const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const HeaderTitle = styled.h1`
  font-size: 14px;
  line-height: 1.21;
`;
const Link = styled.a`
  padding: 5px;
  background-color: #f5f5f5;
`;
const LinkText = styled.span`
  color: #09090b;
  font-size: 10px;
  line-height: 1.2;
`;
type Socials = { link: string; label: string };
// тип для профиля
type StudentHeaderProps = {
  fullName: string;
  avatarUrl?: string;
  social?: Socials;
};

export function StudentHeader() {
  const student: StudentHeaderProps = {
    fullName: "Никитос 403",
    avatarUrl:
      "https://sun9-81.userapi.com/s/v1/ig2/uhLasTmtHwB37VIeRnwCnMnU_IN6aVGmo6J5xnuO1nk1_D1KywuZ60xfltF89-S4lcA6iKM1SgB9xWEcecSaDdkM.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960&from=bu&cs=1280x0",
    social: {
      link: "https://t.me/Luffy403",
      label: "Joker_403",
    },
  };
  return (
    <HeaderRight>
      <HeaderAva src={student.avatarUrl} alt="Ава" />
      <HeaderText>
        <HeaderTitle>{student.fullName}</HeaderTitle>
        <Link href={student.social?.link}>
          <LinkText>{student.social?.label}</LinkText>
        </Link>
      </HeaderText>
    </HeaderRight>
  );
}
