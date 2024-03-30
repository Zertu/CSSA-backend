DROP DATABASE IF EXISTS cssa;
CREATE DATABASE cssa;
\c cssa

-- 创建文章表（如果不存在）
CREATE TABLE IF NOT EXISTS articles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    created_at DATE NOT NULL,
    tags VARCHAR[] DEFAULT '{}',
    updated_at DATE,
    draft BOOLEAN,
    summary TEXT,
    images VARCHAR[] DEFAULT '{}',
    authors VARCHAR[] DEFAULT '{}',
    layout VARCHAR(255),
    bibliography TEXT,
    content TEXT,
    article_index INT UNIQUE NOT NULL
);

-- 创建用户表（如果不存在）
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    avatar VARCHAR(255),
    occupation VARCHAR(255),
    company VARCHAR(255),
    email VARCHAR(255),
    twitter VARCHAR(255),
    linkedin VARCHAR(255),
    github VARCHAR(255),
    layout VARCHAR(255)
);

INSERT INTO articles (title, created_at, tags, updated_at, draft, summary, images, authors, layout, bibliography, content, article_index)
VALUES 
    ('文章标题1', '2022-01-01', ARRAY['标签1', '标签2'], '2022-01-01', false, '文章摘要1', ARRAY['1', '2'], ARRAY['1', '2'], '布局1', '参考文献1', 'URL1', 22),
    ('文章标题2', '2022-02-01', ARRAY['标签3', '标签4'], '2022-02-01', true, '文章摘要2', ARRAY['1', '2'], ARRAY['3', '4'], '布局2', '参考文献2', 'URL2', 11),
    ('文章标题3', '2022-03-01', ARRAY['标签5', '标签6'], '2022-03-01', false, '文章摘要3', ARRAY['1', '2'], ARRAY['5', '6'], '布局3', '参考文献3', 'URL3', 21),
    ('文章标题4', '2022-04-01', ARRAY['标签7', '标签8'], '2022-04-01', false, '文章摘要4', ARRAY['3', '4'], ARRAY['7', '8'], '布局4', '参考文献4', 'URL4', 31),
    ('文章标题5', '2022-05-01', ARRAY['标签9', '标签10'], '2022-05-01', true, '文章摘要5', ARRAY['5', '6'], ARRAY['9', '10'], '布局5', '参考文献5', 'URL5', 41),
    ('文章标题6', '2022-06-01', ARRAY['标签11', '标签12'], '2022-06-01', false, '文章摘要6', ARRAY['7', '8'], ARRAY['11', '12'], '布局6', '参考文献6', 'URL6', 51),
    ('文章标题7', '2022-07-01', ARRAY['标签13', '标签14'], '2022-07-01', false, '文章摘要7', ARRAY['9', '10'], ARRAY['13', '14'], '布局7', '参考文献7', 'URL7', 61),
    ('文章标题8', '2022-08-01', ARRAY['标签15', '标签16'], '2022-08-01', true, '文章摘要8', ARRAY['11', '12'], ARRAY['15', '16'], '布局8', '参考文献8', 'URL8', 71),
    ('文章标题9', '2022-09-01', ARRAY['标签17', '标签18'], '2022-09-01', false, '文章摘要9', ARRAY['13', '14'], ARRAY['17', '18'], '布局9', '参考文献9', 'URL9', 81),
    ('文章标题10', '2022-10-01', ARRAY['标签19', '标签20'], '2022-10-01', false, '文章摘要10', ARRAY['15', '16'], ARRAY['19', '20'], '布局10', '参考文献10', 'URL10', 91),
    ('文章标题11', '2022-11-01', ARRAY['标签21', '标签22'], '2022-11-01', true, '文章摘要11', ARRAY['17', '18'], ARRAY['21', '22'], '布局11', '参考文献11', 'URL11', 101),
    ('文章标题12', '2022-12-01', ARRAY['标签23', '标签24'], '2022-12-01', false, '文章摘要12', ARRAY['19', '20'], ARRAY['23', '24'], '布局12', '参考文献12', 'URL12', 111),
    ('文章标题13', '2023-01-01', ARRAY['标签25', '标签26'], '2023-01-01', false, '文章摘要13', ARRAY['21', '22'], ARRAY['25', '26'], '布局13', '参考文献13', 'URL13', 121);

INSERT INTO users (name, avatar, occupation, company, email, twitter, linkedin, github, layout)
VALUES 
    ('用户1', 'avatar1.png', '职业1', '公司1', 'user1@example.com', 'twitter.com/user1', 'linkedin.com/user1', 'github.com/user1', '布局1'),
    ('用户2', 'avatar2.png', '职业2', '公司2', 'user2@example.com', 'twitter.com/user2', 'linkedin.com/user2', 'github.com/user2', '布局2'),
    ('用户3', 'avatar3.png', '职业3', '公司3', 'user3@example.com', 'twitter.com/user3', 'linkedin.com/user3', 'github.com/user3', '布局3');
