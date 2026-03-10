import styled from "@emotion/styled";
import { ArrowLeft } from "../../icons/icons";
import {  useLocation, useNavigate } from "react-router-dom";
import { SearchLine } from "./SearchLine";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BackLink = styled.button`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background-color: #f4f9ff;
  color: #0e73f6;
  text-decoration: none;

  &:hover {
    background-color: #e6f0ff;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 17px;
  line-height: 1.21;
  margin: 0;
`;

const UserTitle = styled.h2`
  font-size: 17px;
  line-height: 1.21;
  margin: 0;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const HeaderAva = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SocialLink = styled.a`
  padding: 5px;
  background-color: #f5f5f5;
  text-decoration: none;
`;

const LinkText = styled.span`
  color: #09090b;
  font-size: 14px;
  line-height: 1.2;
`;

type Socials = {
  link: string;
  label: string;
};

type StudentHeaderProps = {
  fullName?: string;
  title: string;
  backTo?: string;
  avatarUrl?: string;
  social?: Socials;
};

export function StudentHeader(props: StudentHeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { title } = props;
  const user = {
    fullName: "Никитос 403",
    avatarUrl:
      "https://i.pinimg.com/736x/97/02/44/9702441e8905ee2dcd6484b1fd3f004f.jpg",
    social: { link: "https://t.me/Luffy403", label: "Joker_403" },
  };
  const searchLocation = location.pathname === "/student/tests";

  function BackTo(){
    navigate(-1)
  }
  return (
    <HeaderContainer>
      <LeftBlock>
          <BackLink onClick={BackTo} aria-label="Назад">
            <ArrowLeft />
          </BackLink>
        <HeaderTitle>{title}</HeaderTitle>
      </LeftBlock>

      <HeaderRight>
        {searchLocation && <SearchLine />}
        <HeaderProfile>
          <HeaderAva
            src={user.avatarUrl || "https://via.placeholder.com/60"}
            alt={`Аватар ${user.fullName}`}
          />
          <HeaderText>
            <UserTitle>{user.fullName}</UserTitle>
            {user.social && (
              <SocialLink
                href={user.social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkText>{user.social.label}</LinkText>
              </SocialLink>
            )}
          </HeaderText>
        </HeaderProfile>
      </HeaderRight>
    </HeaderContainer>
  );
}
