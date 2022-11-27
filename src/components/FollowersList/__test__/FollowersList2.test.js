import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom"
import FollowersList from '../FollowersList';

const MockedFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe('Test Render FollowersList', () => {
    beforeEach(() => {
        console.log("RUNS BEFORE EACH TEST")
        jest.mock("../../../__mocks__/axios")
    });

    it('should fetch and render followers element', async () => {
        render(
            <MockedFollowersList />
        );
        //const followerDivElement = await screen.findByTestId(`follower-item-0`)
        //expect(followerDivElement).toBeInTheDocument();
    });
});

