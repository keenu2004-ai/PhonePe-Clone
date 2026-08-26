import React from 'react';
import Hero from '../components/Hero/Hero';
import ServicesGrid from '../components/Features/ServicesGrid';
import BusinessSection from '../components/Business/BusinessSection';
import WealthSection from '../components/Wealth/WealthSection';
import InsuranceSection from '../components/Insurance/InsuranceSection';
import SwitchSection from '../components/Switch/SwitchSection';
import StatsSection from '../components/Stats/StatsSection';
import PressSection from '../components/Press/PressSection';
import DownloadAppSection from '../components/DownloadApp/DownloadAppSection';

export default function Home({ onOpenDownload }) {
  return (
    <main>
      <Hero onOpenDownload={onOpenDownload} />
      <ServicesGrid />
      <BusinessSection />
      <WealthSection />
      <InsuranceSection />
      <SwitchSection />
      <StatsSection />
      <PressSection />
      <DownloadAppSection />
    </main>
  );
}
