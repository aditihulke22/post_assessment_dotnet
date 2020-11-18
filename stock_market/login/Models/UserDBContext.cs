using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace login.Models
{
    public partial class UserDBContext : DbContext
    {
        public UserDBContext()
        {
        }

        public UserDBContext(DbContextOptions<UserDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<UserToken> UserToken { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=SOCDNET16;Database=UserDB;User ID=sa;Password=pass@word1");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Confirmed)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsFixedLength();

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsFixedLength();

                entity.Property(e => e.Mobile)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsFixedLength();

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsFixedLength();

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsFixedLength();
            });

            modelBuilder.Entity<UserToken>(entity =>
            {
                //entity.HasNoKey();
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Token)
                    .HasMaxLength(10)
                    .IsFixedLength();
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
