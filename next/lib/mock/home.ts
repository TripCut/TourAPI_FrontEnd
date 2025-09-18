import { HomeResponse } from "../../types/home";

export async function mockGetHomeData(): Promise<HomeResponse> {
  return {
    userName: "여행자",
    heroBanners: [
      {
        id: "1",
        title: "드라마 속 그곳, 나도 가볼까?",
        subtitle: "#감성여행 #인생샷",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDiv0tiv40KN29pN4no10ro00y0Jh9fECfXngGyE9phXgDkndrarUh6hyLzvqu3Tvdue_b4spXaljBGNkbGHS-1hPXlWV6e48BoS3jP_mJok7xVEVkO_IpCxitWe1FeDUCSFU5xy9NdMgOoQ8fc8edaFJzOcoSMMgy4zzOyzga2jBkh7-n4ljblBE1JMWnsFDgl1r1tQWbrCzHTf4_X0oqUvFx2krN5xNxwagABbjSz5ekloXadTrIX1ur42OtMtoa0S32uROIZ9sU",
      },
      {
        id: "2",
        title: "요즘 뜨는 여행지",
        subtitle: "#힐링 #핫플레이스",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBCeQKhafbmpiN7i59dmG1ukxwZKiI1LSGVPnO01htxUMyGVPBPxy773BFx0Mt9B5b9OpM1zJyoVsblHeGNl_Ie1-kbyQH_BLgOwjJy37v2u2mPF86bzQ-KWBsWMfvRFXZEzZBmTX9uwwf3-DbjMLrrJfgh2MYsftDmrDb6CJjwaJSybCZfPQFXOedV8l18YWtz5dHo6bUl9bnW8Uh3OByxaVEzZyXMO1zEdiaGgnC9iqW05my9Sn31TQRXtiUzUhlMaoOvKrvEkSQ",
      },
    ],
    recommendations: [
      {
        id: "r1",
        category: "드라마",
        title: "인생은 아름다워",
        subtitle: "촬영지: 전남 보성 녹차밭",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCctadcMA1LNOGk2esq68czirNhrOgrqYgz3FhBWGZGrifnd8k81_Rp1H7hZ907m16bQXIExAiWOsapS2GTFT3xIxYs5gl3zRFCDLJvR03qjr1B9j0BCHztCh46gV_17T_oEu0bQdYq6Cwwbjnr1vyCUHTpdj6Q9lXPST_AvriVVlM1fUzbYVUu19um3XhIFPDQaZAsudBzQrvsaiTYywqsJDMEXQN8c8q6B3cZj7iS9S80YrFGIdAO3_ZWbfnGsC5zZGQYWcD1RpU",
      },
      {
        id: "r2",
        category: "여행지",
        title: "전남 보성 녹차밭",
        subtitle: "'인생은 아름다워' 촬영지",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAQWUOu0iwV1-wQhs26xPDyMJ-dUMoBk9V6CiKk2ZyZwXKwN2kGBfiu2fDRS6yjftLVbKuUjpjfLDr14wJT--tzengZeeG-3ki6MQVUeXapmtoLRxfWbUsJA5KF7GQCohidTiShfXSZrnxeBOxdBSzvhDAmjIeEvfyDFVShWCzTpRleHen7oeSTGzK5wNsRLu3YqGKtsFgGVIo7IaQBTjrQSmKqS1DeSLDDe3gfB-V6Wrms3HtaF6cLd7oDP-Pm6qgQaqgHIYEkiFQ",
      },
    ],
    ranking: [
      {
        id: "rk1",
        rank: 1,
        title: "이번 생도 잘 부탁해",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDZv1rfPzu4nxu-5cxn6oNHqdIZ3zryLz2EKIj5JdQogwjecgdzldMCsY1-aU_ftstpuNU91dyidka2bkGZ2MMQ99nZkth3yNjpqbbXErHNC7cmBFLGVih833dSt8rc8FptIQioXdOnGv557bBwAufGAV2d5Zi2A0RmmZ27AKWz2qiH5TuFpVyxDsWqosM1RMG0HK0yWkMxdZd12NbwJjWMkRUonhazj2hUxEDobhs5lLYlSUavQLd3Bt6PbN5j6A21hy8xeRHR_-U",
      },
      {
        id: "rk2",
        rank: 2,
        title: "이상한 변호사 우영우",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDPH6nUTeBsZHvk-4joOPQDuhDabPmxkF9ZxYx5Fq95h51KgWzbLmfyCacjjx18-0FDKmamn3QuVsz-g8f1r4lanqgO4Yjlq6Xcm_kNO90HbKIFsujUcUJaphkWx6ZKfFbWPPjamIjvGMsdx6V_qZqCuXePl8mR9mINduG0HQlxzUFP0JDEO2nSsBPg11NR7lgBPsoORpPVAj_APjixYzYUulgljAoYdW3nfE85dJ5ilXb4eElxRrlPyXslCER7dH04XwYT2l9M-mI",
      },
      {
        id: "rk3",
        rank: 3,
        title: "더 글로리",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCb9lupOM5J4VU9O5F4Izox4jSi17vZXAgKVIyBdkxZBi8a8MhVsfOcX_dk5eHKPqaBQC3DZ6UwstJp7UluWKqTqtggSZCiW7vRbSNxbtOul7kZtIu1aEccwOMEyXF3q8arWdhO4zCkXU0--6U-yS0NOhll3uv1lBc9qz8nou19EA2j9pFvSwPoFCKXex4-B8LN7wBiOYg3bSJvlYNPjRQ5JqlNcmGsmFlS7vgGwe-cNFsu5kFW0KHbtAcyJG-qSm_SDzDG10E3g1I",
      },
      {
        id: "rk4",
        rank: 4,
        title: "유미의 세포들",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBhcG4vpYRIvEr7FkHptg_IXo-YFO4gFZKPGrIa1AtvzoEpTHuL6pdV02MRCosZzTz-VknW18HYq0w4NuZFP8l1cAFSB2IaXlHcr8qaUrLCkkATguaXMycSauPiOk8WIbs-NbhuPzVPbk_IRuJVb612g8A6faPk02kn8pDtbr4blrPQUO958jFKP0Hv0pAVdmgovHDSRbfZ2KXjNTEZ-p48llqV1bziVDBIsHTox9-Y_aXKqg1ubJfKWBs9oC11Tzfd5AsPBpy_OyU",
      },
    ],
  };
}
