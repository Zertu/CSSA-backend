DROP DATABASE IF EXISTS CSSA;
CREATE DATABASE CSSA;

-- 创建文章表（如果不存在）
CREATE TABLE IF NOT EXISTS articles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    tags VARCHAR[] DEFAULT '{}',
    lastmod DATE,
    draft BOOLEAN,
    summary TEXT,
    images JSONB,
    authors VARCHAR[] DEFAULT '{}',
    layout VARCHAR(255),
    bibliography TEXT,
    canonicalUrl VARCHAR(255)
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
INSERT INTO articles (title, date, tags, lastmod, draft, summary, images, authors, layout, bibliography, canonicalUrl)
VALUES 
    ('文章标题1', '2022-01-01', ARRAY['标签1', '标签2'], '2022-01-01', false, '文章摘要1', '{"image1": "url1", "image2": "url2"}', ARRAY['作者1', '作者2'], '布局1', '参考文献1', 'URL1'),
    ('文章标题2', '2022-02-01', ARRAY['标签3', '标签4'], '2022-02-01', true, '文章摘要2', '{"image3": "url3", "image4": "url4"}', ARRAY['作者3', '作者4'], '布局2', '参考文献2', 'URL2'),
    ('文章标题3', '2022-03-01', ARRAY['标签5', '标签6'], '2022-03-01', false, '文章摘要3', '{"image5": "url5", "image6": "url6"}', ARRAY['作者5', '作者6'], '布局3', '参考文献3', 'URL3');

-- 在users表中插入测试数据
INSERT INTO users (name, avatar, occupation, company, email, twitter, linkedin, github, layout)
VALUES 
    ('用户1', 'avatar1.png', '职业1', '公司1', 'user1@example.com', 'twitter.com/user1', 'linkedin.com/user1', 'github.com/user1', '布局1'),
    ('用户2', 'avatar2.png', '职业2', '公司2', 'user2@example.com', 'twitter.com/user2', 'linkedin.com/user2', 'github.com/user2', '布局2'),
    ('用户3', 'avatar3.png', '职业3', '公司3', 'user3@example.com', 'twitter.com/user3', 'linkedin.com/user3', 'github.com/user3', '布局3');
