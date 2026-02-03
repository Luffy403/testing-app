import styled from "@emotion/styled";
import { ArrowLeft } from "../../icons/icons";
import { Link as RouterLink } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 30px;
`;

const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BackLink = styled(RouterLink)`
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

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
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
  fullName: string;
  title: string; // Обязательная строка по заданию
  backTo?: string; // Опциональная строка по заданию
  avatarUrl?: string;
  social?: Socials;
};

export function StudentHeader({ 
  fullName, 
  title, 
  backTo, 
  avatarUrl, 
  social 
}: StudentHeaderProps) {
  return (
    <HeaderContainer>
      <LeftBlock>
        {backTo && (
          <BackLink 
            to={backTo} 
            aria-label="Назад"
          >
            <ArrowLeft />
          </BackLink>
        )}
        <HeaderTitle>{title}</HeaderTitle>
      </LeftBlock>
      
      <HeaderRight>
        <HeaderAva 
          src={avatarUrl || "https://via.placeholder.com/60"} 
          alt={`Аватар ${fullName}`} 
        />
        <HeaderText>
          <HeaderTitle>{fullName}</HeaderTitle>
          {social && (
            <SocialLink href={social.link} target="_blank" rel="noopener noreferrer">
              <LinkText>{social.label}</LinkText>
            </SocialLink>
          )}
        </HeaderText>
      </HeaderRight>
    </HeaderContainer>
  );
}