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
    canonical_url VARCHAR(255)
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
-- 在articles表中插入测试数据
INSERT INTO articles (title, created_at, tags, updated_at, draft, summary, images, authors, layout, bibliography, canonical_url)
VALUES 
    ('文章标题1', '2022-01-01', ARRAY['标签1', '标签2'], '2022-01-01', false, '文章摘要1', ARRAY['1', '2'], ARRAY['1', '2'], '布局1', '参考文献1', 'URL1'),
    ('文章标题2', '2022-02-01', ARRAY['标签3', '标签4'], '2022-02-01', true, '文章摘要2', ARRAY['1', '2'], ARRAY['3', '4'], '布局2', '参考文献2', 'URL2'),
    ('文章标题3', '2022-03-01', ARRAY['标签5', '标签6'], '2022-03-01', false, '文章摘要3', ARRAY['1', '2'], ARRAY['5', '6'], '布局3', '参考文献3', 'URL3');

-- 在users表中插入测试数据
INSERT INTO users (name, avatar, occupation, company, email, twitter, linkedin, github, layout)
VALUES 
    ('用户1', 'avatar1.png', '职业1', '公司1', 'user1@example.com', 'twitter.com/user1', 'linkedin.com/user1', 'github.com/user1', '布局1'),
    ('用户2', 'avatar2.png', '职业2', '公司2', 'user2@example.com', 'twitter.com/user2', 'linkedin.com/user2', 'github.com/user2', '布局2'),
    ('用户3', 'avatar3.png', '职业3', '公司3', 'user3@example.com', 'twitter.com/user3', 'linkedin.com/user3', 'github.com/user3', '布局3');
