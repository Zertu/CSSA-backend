DROP DATABASE IF EXISTS cssa;
CREATE DATABASE cssa;
\c cssa
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
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
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(255),
    emailConfirmed BOOLEAN DEFAULT false,
    name VARCHAR(50),
    last_login DATE,
    displayName VARCHAR(100),
    avatar VARCHAR(255),
    gender VARCHAR(50),
    created_at DATE NOT NULL,
    updated_at DATE,
    authority INT[] DEFAULT ARRAY[]::INTEGER[],
    password VARCHAR(255)
);
-- 创建Tags表
CREATE TABLE IF NOT EXISTS Tags (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    tag_name VARCHAR(50)
);

INSERT INTO users (
    email, 
    emailConfirmed, 
    name,
    displayName, 
    avatar, 
    gender, 
    last_login, 
    created_at, 
    updated_at,
    authority, 
    password
) VALUES (
    'admin@example.com', 
    true, 
    'admin', 
    'Admin', 
    'https://www.library.mun.ca/media/MUNLibrary/images/memorial-university-logo-for_dark_bg.png', 
    'M', 
    '2024-03-30', 
    '2024-03-30',
    '2024-03-30',
    '{1}', 
    'your_password_here'
);
INSERT INTO public.articles
(id, title, created_at, tags, updated_at, draft, summary, images, authors, layout, bibliography, "content", article_index)
VALUES(14, '12421424', '2024-03-30', '{}', '2024-03-30', true, '', '{}', '{1}', '', '', '<p class="PlaygroundEditorTheme__paragraph"><span style="white-space: pre-wrap;">4214214214214124</span></p>', 122);

INSERT INTO users (name, avatar, occupation, company, email, twitter, linkedin, github, layout)
VALUES 
    ('用户1', 'avatar1.png', '职业1', '公司1', 'user1@example.com', 'twitter.com/user1', 'linkedin.com/user1', 'github.com/user1', '布局1'),
    ('用户2', 'avatar2.png', '职业2', '公司2', 'user2@example.com', 'twitter.com/user2', 'linkedin.com/user2', 'github.com/user2', '布局2'),
    ('用户3', 'avatar3.png', '职业3', '公司3', 'user3@example.com', 'twitter.com/user3', 'linkedin.com/user3', 'github.com/user3', '布局3');

INSERT INTO Tags (TagID, TagName)
VALUES 
(1, '驾照'),
(2, '学习');