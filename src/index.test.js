import { mount } from "enzyme";
import React from "react";
import { act } from "react-dom/test-utils";
import { GET_ALL_SPACE_CENTERS } from "./GraphQL/Queries";
import { MockedProvider } from "@apollo/client/testing";
import SpaceCenterContainer from '../components/SpaceCenterContainer';
import { wait } from "@testing-library/user-event/dist/utils";

const mockSpaceCenterData = {
  request: {
    query: GET_ALL_SPACE_CENTERS
  },
  result: {
    data: {
      spaceCenters: {
        nodes: [
          {
            id: "1",
            name: "Schmitt Hills Space Center",
            description: "Qui ipsum ut molestiae cum ut vel fuga aut. Rerum quo numquam. Sed consequatur quis. Omnis voluptatem nemo eligendi dolorum id et ab nulla unde. Illo omnis eum omnis ea. Atque est voluptas est omnis odio."
          },
          {
            id: "2",
            name: "Darian Mill Space Center",
            description: "Reiciendis ipsum necessitatibus. Ratione sapiente hic maiores sunt nihil nihil. Recusandae perspiciatis non necessitatibus velit fuga. Voluptates doloribus nihil iste placeat et ut."
          },
        ],
      },
    },
  },
};

it("renders spaceCenters data", async () => {
  let wrapper;
  await act(async () => {
    wrapper = mount(
      <MockedProvider addTypename={false} mocks={[mockSpaceCenterData]}>
        <SpaceCenterContainer />
      </MockedProvider>
    );
  });

  await act(() => wait(0));
  wrapper.update();
  expect(wrapper).toBeTruthy();
  expect(wrapper.find(".space-center-card-title")).toHaveText(
    "Schmitt Hills Space Center"
  );
})