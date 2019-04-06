1. 查看版本演进各种命令
git -log 查看（当前分支）日志
git -log -n2 --oneline 查看最近两个commit的第一行
git log -all 所有分支历史
git log -all --graph 图像化所有分支历史
git branch -v  查看本地分支
git checkout -b 创建分支
gitk 打开图像界面

git cat-file -t + id识别文件的类型  
.git 文件下 object config HAD
git 版本控制系统的存储 
commit  git cat-file -p commit id
tree
blob
根据一个commitid（commit类型）可以显示出该commit的内容，有tree parent author committer
tree（类型）的信息包含了其他tree（提交文件的子文件或父文件）和blob(这次commit的具体文件信息 )
打开这个blob文件就是文件的内容
2. git branch+ git rebase
分离头指针比较危险，会产生未被处理的commit
git branch -d 分支名   清除分支
git commit -amend修改commit的信息
git rebase -i + commitid 变基 修改commit
以一个commit为基把其他几个合并过来 生成新的commitid master指向的commitid也发生改变 -----------s合并    --------------r重写

3. git diff 显示工作区暂存区文件的差异
git diff +文件 只显示具体文件的差异

4. git reset  HEAD变更暂存区
把暂存区回复和head一样 暂存区的变更不要脸，和分支最新的commit一样的
git reset HEAD 文件名 具体恢复某个文件变更

git diff --cached 返回空 说明暂存区和head是一样的
 git checkout 变更工作区
当工作区的变更不如暂存区，把工作区恢复成暂存区的状态
git checkout -- 文件名

5. commit 回退