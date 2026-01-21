import styled from "@emotion/styled";
import { useState } from "react";
import { ProfileLinkIcon } from "../../icons/icons";
import { ChangeModalPassword } from "../../components/ChangeModalPassword";

const Title = styled.h3`
  color: #0e73f6;
  font-size: 36px;
`;

const ProfileImg = styled.img`
  border-radius: 20px;
  max-width: 346px;
  width: 100%;
  height: 346px;
  object-fit: cover;
`;

const Line = styled.div`
  height: 2px;
  background-color: #efefef;
  margin: 30px 0;
`;

const WrapperLine = styled.div`
  display: flex;
  gap: 30px;
`;

const ProfileInfo = styled.div`
  max-width: 491px;
  width: 100%;
`;

const FullNameLine = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const FullName = styled.h4`
  color: #000000;
  font-size: 30px;
  margin-right: 10px;
`;

const NameEmoji = styled.span`
  border-radius: 14px;
  font-size: 21px;
  color: #4094f7;
  padding: 7px 14px;
  background-color: #e8f5ff;
`;

const Link = styled.a`
  font-size: 20px;
  color: #000000;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;
`;

const GroupList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;
`;

const GroupLine = styled.li`
  display: flex;
`;

const GroupItem = styled.p`
  margin-right: 5px;
  background-color: #f5f5f5;
  border-radius: 14px;
  padding: 6px 12px;
  font-size: 18px;
`;

const ButtonLine = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const ProfileButton = styled.button`
  border: 1px solid #dde2e4;
  font-size: 14px;
  padding: 10px 30px;
  font-weight: 600;
  border-radius: 6px;
  background-color: #fff;
`;

// типы с вложенностями
type Groups = { code: string; course: string; track: string };
type Socials = { link: string; label: string };
// тип для профиля
type ProfileDataProps = {
  fullName: string;
  work: string;
  avatarUrl?: string;
  social?: Socials;
  group: Groups[];
};
// тип для заголовка страницы профиля
type ProfileTitleProps = {
  title: string;
};

export function ProfileTitle(p: ProfileTitleProps) {
  return <Title>{p.title}</Title>;
}

export function StudentProfilePage() {
  const [openModal, setOpenModal] = useState(false);
  const ProfileData: ProfileDataProps = {
    fullName: "Никитос 403",
    work: "КОД",
    avatarUrl:
      "https://sun9-81.userapi.com/s/v1/ig2/uhLasTmtHwB37VIeRnwCnMnU_IN6aVGmo6J5xnuO1nk1_D1KywuZ60xfltF89-S4lcA6iKM1SgB9xWEcecSaDdkM.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960&from=bu&cs=1280x0",
    social: {
      link: "https://t.me/Luffy403",
      label: "Joker_403",
    },
    group: [
      { code: "3KF1", course: "3 курс", track: "Frontend" },
      { code: "2KF1", course: "2 курс", track: "Frontend" },
    ],
  };

  const [profile] = useState<ProfileDataProps>(ProfileData);

  function onChangePassword() {
    setOpenModal(true);
  }

  return (
    <section>
      <ProfileTitle title="Профиль" />
      <Line />
      <WrapperLine>
        <ProfileImg src={profile.avatarUrl} alt={"avatar"} />
        <ProfileInfo>
          <FullNameLine>
            <FullName>{profile.fullName}</FullName>
            <NameEmoji>{profile.work}</NameEmoji>
          </FullNameLine>
          <Link href={profile.social?.link}>
            <ProfileLinkIcon />
            <span>{profile.social?.label}</span>
          </Link>
          <GroupList>
            {profile.group.map((g, index) => (
              <GroupLine key={index}>
                <GroupItem>{g.code}</GroupItem>
                <GroupItem>{g.course}</GroupItem>
                <GroupItem>{g.track}</GroupItem>
              </GroupLine>
            ))}
          </GroupList>
          <ButtonLine>
            <ProfileButton>Поменять фото</ProfileButton>
            <ProfileButton onClick={() => onChangePassword()}>
              Изменить пароль
            </ProfileButton>
          </ButtonLine>
        </ProfileInfo>
      </WrapperLine>
      <ChangeModalPassword
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </section>
  );
}
