import { ProductExperience } from "@/components/Dt4itSite";

export function meta({ params }: { params: { slug?: string } }) {
  const productMeta: Record<string, { title: string; description: string }> = {
    fleet: { title: "أسطولي لإدارة الأسطول | Diamond Technology", description: "تطبيق أسطولي لإدارة السيارات والسائقين والصيانة والوقود." },
    tailor: { title: "برنامج خياط لإدارة محلات الخياطة | Diamond Technology", description: "برنامج لإدارة محلات الخياطة والقياسات والمخزون والفاتورة الإلكترونية." },
    check: { title: "الشيك الماسي لإدارة وطباعة الشيكات | Diamond Technology", description: "برنامج لإدارة وطباعة الشيكات المالية والحوالات والتقارير." },
    archive: { title: "الأرشيف الماسي | Diamond Technology", description: "أرشفة إلكترونية للوثائق والمستندات مع تحكم كامل بالنظام." },
  };
  const metadata = productMeta[params.slug ?? ""] ?? { title: "منتجات التكنولوجيا الماسية", description: "حلول التكنولوجيا الماسية للأعمال." };
  return [
    { title: metadata.title },
    { name: "description", content: metadata.description },
  ];
}

export default function ProductRoute() {
  return <ProductExperience />;
}
