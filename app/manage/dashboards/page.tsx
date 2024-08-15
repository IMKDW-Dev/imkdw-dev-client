import { Metadata } from 'next';
import DashboardStatsCount from '../../../features/manage/dashboards/statsCount/StatsCount';
import generateCustomMetadata from '../../../utils/metadata';
import DashboardEnviroment from '../../../features/manage/dashboards/enviroments/Enviroments';

export const metadata: Metadata = {
  ...generateCustomMetadata({
    title: 'Dashboard',
    desc: 'IMKDW DEV의 대시보드 페이지입니다.',
    link: 'https://imkdw.dev/manage/dashboard',
  }),
};

export default function ManageDashboardPage() {
  return (
    <section className="flex w-full flex-col gap-7 p-6">
      <div className="flex w-full justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="flex flex-col gap-5">
        <DashboardStatsCount />
        <DashboardEnviroment />
      </div>
    </section>
  );
}
