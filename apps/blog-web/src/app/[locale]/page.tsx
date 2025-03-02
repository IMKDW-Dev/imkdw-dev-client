import { Link, useSafeTranslations } from "@imkdw-dev-client/i18n";

export default function HomePage() {
  const t = useSafeTranslations("Sidebar");
  return (
    <div>
      <h1>{t("Sidebar.platform")}</h1>
      <Link href="/about">{t("Sidebar.categories")}</Link>
    </div>
  );
}
