import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="game dev"
            desc="i do games using unity ( C# ) and 3D objects using Blender"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="I also develop the websites. I create high performance website using Reactjs."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="app Dev"
            desc="I develop mobile applications using android studio "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
