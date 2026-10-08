import { HomeExperience } from "@/components/Dt4itSite";

export function meta() {
  return [
    { title: "شركة التكنولوجيا الماسية لتقنية المعلومات | Diamond Technology" },
    { name: "description", content: "شركة التكنولوجيا الماسية لتقنية المعلومات. برمجة المواقع والاستضافة وتطبيقات الجوال وأنظمة الإدارة والأرشفة الإلكترونية." },
    { property: "og:title", content: "التكنولوجيا الماسية لتقنية المعلومات" },
    { property: "og:description", content: "حلول تقنية وتطبيقات لإدارة الأساطيل والخياطة والشيكات والأرشفة الإلكترونية." },
    { property: "og:type", content: "website" },
  ];
}

export default function HomeRoute() {
  return <HomeExperience />;
}
