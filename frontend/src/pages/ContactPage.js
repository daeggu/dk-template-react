import React from 'react';
import Section from 'components/post/Section';
import Title from 'components/post/Title';
import Content from 'components/post/Content';
import Contact from 'components/common/Contact';
import { Helmet } from 'react-helmet';

const ContactPage = () => {
      return (
            <Section>
                  <Helmet>
                        <title>Contact</title>
                  </Helmet>
                  <Title>
                        Contact
                  </Title>
                  <Content>
                        <p></p>
                        Contact Page Template입니다 <b>Mobx</b>나 <b>Redux</b>에
                        연결하여 적용 시켜보세요!
                        <p></p>
                        <Contact/>
                  </Content>
            </Section>
      );
};

export default ContactPage;