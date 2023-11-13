import msRoutes from "../../config/msRoutes";
import { Languages } from "../../types/news.types";
import { Responses, ResponseStatus } from "../../types/response.types";

const voidNewsResponse: NewsResponse = {
  status: "error",
  totalResults: 0,
  articles: [],
};
const queryLanguages = {
  en: 'q=+"pets" +("veterinary" OR "vet" OR "pet care")&sortBy=popularity&language=en',
  es: 'q=+"mascotas" +("veterinaria" OR "veterinario" OR "cuidado de mascotas")&sortBy=popularity&language=es',
};

class GetNewsService {
  public async getNews(
    lan: Languages,
    pageSize: Number = 10,
    page: Number = 1
  ): Promise<Responses> {
    const responses: Responses = {
      status: ResponseStatus.INTERNAL_SERVER_ERROR,
      message: "hello!",
      answer: {
        message: "hello!",
      },
    };
    console.log(msRoutes.users_ms.route, msRoutes.users_ms.port.toString());
    // get news
    await this.processNews(lan, pageSize, page)
      .catch((err) => {
        // basic error handling
        console.log(err);
        responses.status = ResponseStatus.INTERNAL_SERVER_ERROR;
        return voidNewsResponse;
      })
      .then((res) => {
        if (res.status === "error") {
          responses.status = ResponseStatus.INTERNAL_SERVER_ERROR;
          return res;
        }
        // remove the last part of the content ([+number chars]])
        res.articles = res.articles.map((article) => {
          article.content = article.content.replace(/\s*\[.*?\]$/, "");
          return article;
        });
        responses.status = ResponseStatus.OK;
        responses.answer = res.articles;
        return res;
      });
    return responses;
  }

  private async processNews(
    lan: Languages,
    pageSize: Number = 10,
    page: Number = 1
  ): Promise<NewsResponse> {
    const res: NewsResponse | boolean = await this.fetchNews(
      lan,
      pageSize,
      page
    )
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return await response.json();
      })
      .then(async (data) => {
        console.log(data);
        data.articles = data.articles.map((article: any) => {
          article.source = article.source.name;
          return article;
        });
        return data as NewsResponse;
      })
      .catch((err) => {
        console.log(err);
        return voidNewsResponse;
      });
    return res;
  }

  private async fetchNews(
    lan: Languages,
    pageSize: Number = 10,
    page: Number = 1
  ): Promise<Response> {
    const query = queryLanguages[lan];
    const route = `${
      msRoutes.news_ms.route
    }?${query}&pageSize=${pageSize.toString()}&page=${page.toString()}&apiKey=${
      msRoutes.news_ms.key
    }`;
    console.log(route);
    return await fetch(route);
  }
}

interface News {
  source: string;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
interface NewsResponse {
  status: string;
  totalResults: number;
  articles: News[];
}

export default new GetNewsService();
