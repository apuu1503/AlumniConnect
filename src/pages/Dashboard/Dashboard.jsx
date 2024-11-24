import React, { useContext, useState } from "react";
import GlobalContext from "../../components/Context/GloablContext";
import Post from "../../components/Post/Post";
import WriteNewPost from "../../components/WriteNewPost/WriteNewPost";
import usePosts from "./usePosts";
import "./dashboard.css";

const Dashboard = () => {
	const { user, openNav, breakpoint } = useContext(GlobalContext);
	const [showWritePostBox, setShowWritePostBox] = useState(false);
	const { posts, likePost, submitComment, addPost } = usePosts(); // Ensure `addPost` is included in the hook.

	return (
		<section className="dashboard-container">
			<div className="dashboard-head">
				<div className="dashboard-write">
					<div className="dashboard-write-avatar">
						<img src={user.avatar} alt={user.name} />
					</div>
					<div
						className="dashboard-write-block"
						onClick={() => setShowWritePostBox(true)}
					>
						<span>Add a new post...</span>
					</div>
				</div>
			</div>
			<div className="dashboard-body">
				<div className="dashboard-posts">
					<div
						className={`responsive-masonry responsive-masonry-layout-${breakpoint("mobile")
							? "1"
							: breakpoint("tab")
								? openNav
									? "1"
									: "2"
								: openNav
									? "2"
									: "3"
							}`}
					>
						{posts.map((post, index) => (
							<div className="responsive-masonry-box" key={index}>
								<Post
									addComment={submitComment}
									post={post}
									likePost={likePost}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			{showWritePostBox && (
				<WriteNewPost
					close={() => setShowWritePostBox(false)}
					addPost={addPost} // Pass the addPost function to WriteNewPost
				/>
			)}
		</section>
	);
};

export default Dashboard;
