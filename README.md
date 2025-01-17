# Reels Application

This project is a vertical scrolling video reels application built using React, TypeScript, and Tailwind CSS. It supports features such as autoplay for videos in view, pausing videos that move out of view, and displaying videos in a modal with vertical scrolling and controlled playback.

---

## Features

1. **Intersection Observer Integration**:
   - Automatically plays videos when they are visible on the screen.
   - Pauses videos when they scroll out of view.

2. **Modal Functionality**:
   - Displays the selected video in a modal.
   - Supports vertical scrolling within the modal to navigate through other videos.
   - Only the video in view plays while others are paused.

3. **Like and Share Options**:
   - Users can like/unlike videos with a toggle.
   - Includes a placeholder share button.

4. **Background Scroll Control**:
   - Disables background scrolling when the modal is open.

5. **Responsive Design**:
   - Fully responsive layout for mobile, tablet, and desktop devices.

---

## Process and Design Choices

1. **Framework and Libraries**:
   - **React**: For building the UI components.
   - **TypeScript**: For type safety and better developer experience.
   - **Tailwind CSS**: For fast and efficient styling.

2. **Video Playback Logic**:
   - Used the `IntersectionObserver` API to detect when a video enters or exits the viewport.
   - This ensures only one video plays at a time, optimizing performance and user experience.

3. **Modal Implementation**:
   - Designed a modal with vertical scrolling to allow users to browse through videos seamlessly.
   - Added logic to pause videos when they move out of view in the modal.

4. **User Interaction**:
   - Like/unlike functionality is implemented using React state.
   - Share button is added as a placeholder for future enhancements.

5. **Responsiveness**:
   - Ensured the layout adapts to various screen sizes for a consistent user experience.

---

## Instructions to Set Up the Project

### Prerequisites
- Node.js (v16 or later)
- npm or yarn

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/m-piyush/reelapp.git
   cd reels-application
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at `http://localhost:3000`.

4. **Build for Production**:
   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Run the Production Build**:
   ```bash
   npm start
   # or
   yarn start
   ```

## Future Enhancements
- Add backend support for persisting likes and video data.
- Implement share functionality.
- Optimize video loading with lazy loading and streaming support.
- Enhance accessibility with better keyboard and screen reader support.

