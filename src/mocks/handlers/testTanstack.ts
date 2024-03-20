import { titleList } from "../fixtures/testTanstack";
import { HttpResponse, delay, http } from "msw";

let incrementalId = titleList.length;

const getIncrementalId = () => {
  return incrementalId++;
};

export const TestTanstackHandlers = [
  // 조회
  http.get("/testTanstack", () => {
    return HttpResponse.json({ titleList: titleList });
  }),

  // 등록
  http.post("/testTanstack", async ({ request }) => {
    const req = (await request.json()) as unknown as { title: string };
    titleList.push({
      id: getIncrementalId(),
      title: req.title,
    });
    await delay(2000);
    return new HttpResponse(null, { status: 201 });
  }),

  //수정
  http.patch("/testTanstack/:id", async ({ request, params }) => {
    const itemId = Number(params.id);
    const req = (await request.json()) as unknown as { title: string };

    const index = titleList.findIndex(({ id }) => id === itemId);

    if (index === -1) {
      return new HttpResponse(null, { status: 404 });
    }

    titleList[index].title = req.title;
    await delay(2000);
    return new HttpResponse(null, { status: 200 });
  }),

  //삭제
  http.delete("/testTanstack/:id", async ({ params }) => {
    const itemId = Number(params.id);
    const deleteIndex = titleList.findIndex(({ id }) => id === itemId);

    if (deleteIndex === -1) {
      return new HttpResponse(null, { status: 404 });
    }

    titleList.splice(deleteIndex, 1);

    return new HttpResponse(null, { status: 204 });
  }),
];
