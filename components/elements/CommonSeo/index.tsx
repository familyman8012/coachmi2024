import { DefaultSeo, NextSeo } from "next-seo";

export function CommonSeo() {
  const CommonSeoData = {
    keywords: `커리어 코칭, 셀프 브랜딩, 퍼스널 브랜딩, 직무교육, 소셜 네트워킹, 경력개발, 커리어 네트워킹 파티, 강점기반 브랜딩 코치, 브랜드 마케팅, 브랜드 마케팅 전문가, 한국코치협회, 취업, 이직, 창업, 창업 브랜딩`,
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/images/logo_coachmi_32.png",
      },
      {
        rel: "apple-touch-icon",
        href: "/images/logo_coachmi_76.png",
        sizes: "76x76",
      },
      {
        rel: "apple-touch-icon",
        href: "/images/logo_coachmi_120.jpg",
        sizes: "120x120",
      },
    ],
    additionalMetaTags: [
      {
        name: "application-name",
        content: "코칭에 소셜을 더하다. 코치미",
      },
      {
        name: "msapplication-tooltip",
        content: "코치미",
      },
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover",
      },
    ],

    twitter: {
      handle: "@handle",
      site: "https://www.coachmi.co.kr",
      cardType: "summary_large_image",
    },
  };
  return <DefaultSeo {...CommonSeoData} />;
}

export function IndexSeo() {
  const indexSeoData = {
    canonical: "https://www.coachmi.co.kr",
    title: "코치미 | 코칭에 소셜을 더하다",
    description:
      "코칭에 소셜을 더하다. 코치미 -  하버드 출신, 한국코치협회 소속의 코치가 제공하는 커리어 코칭, 셀프 브랜딩, 퍼스널 브랜딩, 직무교육, 소셜 네트워킹, 경력개발, 커리어 네트워킹 파티, 브랜드 마케팅,  취업, 이직, 창업, 창업 브랜딩에 관한 강의를 제공하는 플랫폼",

    openGraph: {
      type: "website",
      title: "코치미 | 코칭에 소셜을 더하다",
      description: `하버드 출신, 한국코치협회 소속의 코치가 제공하는 커리어 코칭, 셀프 브랜딩, 퍼스널 브랜딩, 직무교육, 소셜 네트워킹, 경력개발, 커리어 네트워킹 파티, 브랜드 마케팅,  취업, 이직, 창업, 창업 브랜딩에 관한 강의를 제공하는 플랫폼`,
      url: "https://www.coachmi.co.kr",
      images: [
        {
          url: "https://www.coachmi.co.kr/images/main_vis.png",
          width: 1200,
          height: 630,
          alt: "코치미 대표이미지",
        },
      ],
      site_name: "코치미",
    },
  };
  return <NextSeo {...indexSeoData} />;
}

export function NewsSeo() {
  const NoticeSeoData = {
    canonical: "https://www.coachmi.co.kr/notice",
    title: "새로운 소식과 이야기 - 코치미 : 코칭에 소셜을 더하다",
    description: "공지사항, 코치미 가이드부터 다양한 소식까지",

    openGraph: {
      type: "website",
      title: "새로운 소식과 이야기 - 코치미 : 코칭에 소셜을 더하다",
      description: `공지사항, 코치미 가이드부터 다양한 소식까지`,
      url: "https://www.coachmi.co.kr/notice",
      images: [
        {
          url: "https://www.coachmi.co.kr/images/main_vis.png",
          width: 1200,
          height: 630,
          alt: "코치미 대표이미지",
        },
      ],
      site_name: "코치미",
    },
  };
  return <NextSeo {...NoticeSeoData} />;
}

export function LectureSeo() {
  const RegisterSeoData = {
    canonical: "https://www.coachmi.co.kr/register",
    title: "경력개발 코치미 가입 - 인생의 터닝포인트",
    description:
      "하버드 출신, 한국코치협회 소속의 코치가 제공하는 경력개발, 취업, 이직, 비젼을 만들어 가는 코치미",
    openGraph: {
      type: "website",
      title: "경력개발 코치미 가입 - 인생의 터닝포인트",
      description: `하버드 출신, 한국코치협회 소속의 코치가 제공하는 경력개발, 취업, 이직, 비젼을 만들어 가는 코치미`,
      url: "https://www.coachmi.co.kr/register",
      images: [
        {
          url: "https://www.coachmi.co.kr/images/main_vis.png",
          width: 1200,
          height: 630,
          alt: "코치미 대표이미지",
        },
      ],
      site_name: "코치미",
    },
  };
  return <NextSeo {...RegisterSeoData} />;
}

export function RegisterSeo() {
  const RegisterSeoData = {
    canonical: "https://www.coachmi.co.kr/register",
    title: "경력개발 코치미 가입 - 인생의 터닝포인트",
    description:
      "하버드 출신, 한국코치협회 소속의 코치가 제공하는 경력개발, 취업, 이직, 비젼을 만들어 가는 코치미. 가입을 축하드립니다.",
    openGraph: {
      type: "website",
      title: "경력개발 코치미 가입 - 인생의 터닝포인트",
      description: `하버드 출신, 한국코치협회 소속의 코치가 제공하는 경력개발, 취업, 이직, 비젼을 만들어 가는 코치미. 가입을 축하드립니다.`,
      url: "https://www.coachmi.co.kr/register",
      images: [
        {
          url: "https://www.coachmi.co.kr/images/main_vis.png",
          width: 1200,
          height: 630,
          alt: "코치미 대표이미지",
        },
      ],
      site_name: "코치미",
    },
  };
  return <NextSeo {...RegisterSeoData} />;
}

export function SignInSeo() {
  const SignInSeoData = {
    canonical: "https://www.coachmi.co.kr/signin",
    title: "커리어 경쟁력을 만들어주는 코치미 로그인",
    description:
      "경력개발 플랫폼 코치미에 오신 것을 환영합니다.  취업, 이직, 창업, 경력개발의 성공을 하고 싶은 분들을 위한 최상의 서비스를 제공하고 있습니다.",
    openGraph: {
      type: "website",
      title: "경력개발 플랫폼 코치미 로그인",
      description: `경력개발 플랫폼 코치미에 오신 것을 환영합니다.  취업, 이직, 창업, 경력개발의 성공을 하고 싶은 분들을 위한 최상의 서비스를 제공하고 있습니다.`,
      url: "https://www.coachmi.co.kr/signin",
      images: [
        {
          url: "https://www.coachmi.co.kr/images/main_vis.png",
          width: 1200,
          height: 630,
          alt: "코치미 대표이미지",
        },
      ],
      site_name: "코치미",
    },
  };
  return <NextSeo {...SignInSeoData} />;
}

export function PaymentSeo() {
  const PaymentSeoData = {
    canonical: "https://www.coachmi.co.kr/payment",
    title: "나를 위한 경험, 지금 시작 - 코치미 결제",
    description:
      "최상의 클래스를 진행하기 위해 최고의 선생님들을 모시고 있습니다. 질높은 클래스를 통해 최선의 변화와 만족감을 드리겠습니다.",

    openGraph: {
      type: "website",
      title: "나를 위한 경험, 지금 시작 - 코치미 결제",
      description: `최상의 클래스를 진행하기 위해 최고의 선생님들을 모시고 있습니다. 질높은 클래스를 통해 최선의 변화와 만족감을 드리겠습니다.`,
      url: "https://www.coachmi.co.kr/payment",
      images: [
        {
          url: "https://www.coachmi.co.kr/images/main_vis.png",
          width: 1200,
          height: 630,
          alt: "코치미 대표이미지",
        },
      ],
      site_name: "코치미",
    },
  };
  return <NextSeo {...PaymentSeoData} />;
}

export function PaymentCompleteSeo() {
  const PaymentCompleteSeoData = {
    canonical: "https://www.coachmi.co.kr/payment",
    title: "결제완료 - 코치미 : 성공적인 삶을 위한 경력개발을 만들어가는 곳",
    description:
      "코치미 프로그램을 선택해주셔서 감사합니다. 최상의 변화, 더 나은 서비스를 제공하기 위해 앞으로도 노력하겠습니다.",

    openGraph: {
      type: "website",
      title: "결제완료 - 코치미 :성공적인 삶을 위한 경력개발을 만들어가는 곳",
      description: `경력개발 플랫폼 코치미 결제완료페이지`,
      url: "https://www.coachmi.co.kr/payment",
      images: [
        {
          url: "https://www.coachmi.co.kr/images/main_vis.png",
          width: 1200,
          height: 630,
          alt: "코치미 대표이미지",
        },
      ],
      site_name: "코치미",
    },
  };
  return <NextSeo {...PaymentCompleteSeoData} />;
}

export function YakwanSeo() {
  const YakwanSeoData = {
    canonical: "https://www.coachmi.co.kr/yakwan/privacy",
    title: "약관 - 코치미 : 경력개발 플랫폼",
    description: "경력개발 플랫폼 코치미 약관",
    openGraph: {
      type: "website",
      title: "약관 | 경력개발 플랫폼 코치미",
      description: `경력개발 플랫폼 코치미 약관`,
      url: "https://www.coachmi.co.kr/yakwan/privacy",
      images: [
        {
          url: "https://www.coachmi.co.kr/images/main_vis.png",
          width: 1200,
          height: 630,
          alt: "코치미 대표이미지",
        },
      ],
      site_name: "코치미",
    },
  };
  return <NextSeo {...YakwanSeoData} />;
}

export function PolicySeo() {
  const PolicySeoData = {
    canonical: "https://www.coachmi.co.kr/yakwan/policy",
    title: "개인정보처리방침 - 코치미 : 경력개발 플랫폼",
    description: "경력개발 플랫폼 코치미",
    openGraph: {
      type: "website",
      title: "개인정보처리방침 - 코치미 : 경력개발 플랫폼",
      description: `경력개발 플랫폼 코치미 개인정보처리방침`,
      url: "https://www.coachmi.co.kr/yakwan/policy",
      images: [
        {
          url: "https://www.coachmi.co.kr/images/main_vis.png",
          width: 1200,
          height: 630,
          alt: "코치미 대표이미지",
        },
      ],
      site_name: "코치미",
    },
  };
  return <NextSeo {...PolicySeoData} />;
}

export function MypageSeo() {
  const YakwanSeoData = {
    canonical: "https://coachmi.co.kr/mypage",
    title: "마이페이지 - 코치미 : 경력개발 플랫폼",
    description: "신청한 클래스, 찜한 클래스, 주문내역에 대해 알려드립니다.",
    openGraph: {
      type: "website",
      title: "마이페이지 - 코치미 : 경력개발 플랫폼",
      description: `신청한 클래스, 찜한 클래스, 주문내역에 대해 알려드립니다.`,
      url: "https://coachmi.co.kr/mypage",
      images: [
        {
          url: "https://www.coachmi.co.kr/images/main_vis.png",
          width: 1200,
          height: 630,
          alt: "코치미 대표이미지",
        },
      ],
      site_name: "코치미",
    },
  };
  return <NextSeo {...YakwanSeoData} />;
}

export function GenreSeo({ url, text }: { url: string; text: string }) {
  const PolicySeoData = {
    canonical: `https://www.coachmi.co.kr/view/${url}`,
    title: `${text}   - 코치미 : 경력개발 플랫폼`,
    description: `${text} 프로그램을 통해, 이직, 취업, 창업에 경쟁력 높은 경력과 능력을 만들어 나갑니다.`,
    openGraph: {
      type: "website",
      title: `${text}   - 코치미 : 경력개발 플랫폼`,
      description: `${text} 프로그램을 통해, 이직, 취업, 창업에 경쟁력 높은 경력과 능력을 만들어 나갑니다.`,
      url: `https://www.coachmi.co.kr/view//${url}`,
      images: [
        {
          url: "https://www.coachmi.co.kr/images/main_vis.png",
          width: 1200,
          height: 630,
          alt: "코치미 대표이미지",
        },
      ],
      site_name: "코치미",
    },
  };
  return <NextSeo {...PolicySeoData} />;
}

export function AboutSeo() {
  const PolicySeoData = {
    canonical: `https://www.coachmi.co.kr/about`,
    title: `하버드 출신, 한국코치협회 소속의 코치가 제공하는 커리어 코칭 : 코치미`,
    description: `코치미를 통해 이직, 취업, 창업에 경쟁력 높은 경력과 능력을 만들어 나갈 수 있습니다.`,
    openGraph: {
      type: "website",
      title: `하버드 출신, 한국코치협회 소속의 코치가 제공하는 커리어 코칭 : 코치미`,
      description: `코치미를 통해 이직, 취업, 창업에 경쟁력 높은 경력과 능력을 만들어 나갈 수 있습니다.`,
      url: `https://www.coachmi.co.kr/about`,
      images: [
        {
          url: "https://www.coachmi.co.kr/images/main_vis.png",
          width: 1200,
          height: 630,
          alt: "코치미 대표이미지",
        },
      ],
      site_name: "코치미",
    },
  };
  return <NextSeo {...PolicySeoData} />;
}

export function DetailSeo({
  _id,
  imgurl,
  title,
}: {
  _id: string;
  imgurl: string;
  title: string;
}) {
  const PolicySeoData = {
    canonical: `https://www.coachmi.co.kr/view/${_id}`,
    title: `${title} - 코치미 : 경력개발 플랫폼`,
    description: `${title} 에 대한 상세 정보입니다.`,
    openGraph: {
      type: "website",
      title: `${title}`,
      description: `${title} 에 대한 상세 정보입니다.`,
      url: `https://www.coachmi.co.kr/view//${_id}`,
      images: [
        {
          url: `${imgurl}`,
          width: 1200,
          height: 630,
          alt: "코치미 대표이미지",
        },
      ],
      site_name: "코치미",
    },
  };
  return <NextSeo {...PolicySeoData} />;
}

export function SearchSeo({ keyword }: { keyword: string }) {
  const PolicySeoData = {
    canonical: `https://www.coachmi.co.kr/search?keyword=${keyword}`,
    title: `"${keyword}" 검색결과 - 코치미 : 경력개발 플랫폼`,
    description: "검색하신 결과를 알려드립니다.",
    openGraph: {
      type: "website",
      title: `"${keyword}" 검색결과 - 코치미 : 문화를 즐기다. 문화를 만들다.`,
      description: `검색하신 결과를 알려드립니다.`,
      url: "https://www.coachmi.co.kr/search",
      images: [
        {
          url: "https://www.coachmi.co.kr/images/main_vis.png",
          width: 1200,
          height: 630,
          alt: "코치미 대표이미지",
        },
      ],
      site_name: "코치미",
    },
  };
  return <NextSeo {...PolicySeoData} />;
}
