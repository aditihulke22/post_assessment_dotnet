using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace excel.Models
{
    public partial class StockDBContext : DbContext
    {
        public StockDBContext()
        {
        }

        public StockDBContext(DbContextOptions<StockDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Company> Company { get; set; }
        public virtual DbSet<IpoDetails> IpoDetails { get; set; }
        public virtual DbSet<StockExchange> StockExchange { get; set; }
        public virtual DbSet<StockPrice> StockPrice { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=SOCDNET16;Database=StockDB;User ID=sa;Password=pass@word1");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Company>(entity =>
            {
                entity.HasKey(e => e.Code);

                entity.Property(e => e.Code)
                    .HasMaxLength(50)
                    .IsFixedLength();

                entity.Property(e => e.BoardOfDirectors)
                    .HasMaxLength(100)
                    .IsFixedLength();

                entity.Property(e => e.Brief)
                    .HasMaxLength(100)
                    .IsFixedLength();

                entity.Property(e => e.Ceo)
                    .HasMaxLength(50)
                    .IsFixedLength();

                entity.Property(e => e.CompanyName)
                    .HasMaxLength(50)
                    .IsFixedLength();

                entity.Property(e => e.Sector)
                    .HasMaxLength(50)
                    .IsFixedLength();

                entity.Property(e => e.StockExchange)
                    .HasMaxLength(50)
                    .IsFixedLength();

                entity.Property(e => e.Turnover)
                    .HasMaxLength(50)
                    .IsFixedLength();

                entity.HasOne(d => d.StockExchangeNavigation)
                    .WithMany(p => p.Company)
                    .HasForeignKey(d => d.StockExchange)
                    .HasConstraintName("FK_Company_StockExchange");
            });

            modelBuilder.Entity<IpoDetails>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CompanyName)
                    .HasMaxLength(50)
                    .IsFixedLength();

                entity.Property(e => e.OpenDateTime)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.PricePerShare)
                    .HasMaxLength(10)
                    .IsFixedLength();

                entity.Property(e => e.Remarks)
                    .HasMaxLength(100)
                    .IsFixedLength();

                entity.Property(e => e.StockExchange)
                    .HasMaxLength(50)
                    .IsFixedLength();
            });

            modelBuilder.Entity<StockExchange>(entity =>
            {
                entity.HasKey(e => e.StockExchange1);

                entity.Property(e => e.StockExchange1)
                    .HasColumnName("StockExchange")
                    .HasMaxLength(50)
                    .IsFixedLength();

                entity.Property(e => e.Brief)
                    .HasMaxLength(100)
                    .IsFixedLength();

                entity.Property(e => e.Contact)
                    .HasMaxLength(100)
                    .IsFixedLength();

                entity.Property(e => e.Remarks)
                    .HasMaxLength(100)
                    .IsFixedLength();
            });

            modelBuilder.Entity<StockPrice>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Code)
                    .HasMaxLength(50)
                    .IsFixedLength();

                entity.Property(e => e.Date)
                    .HasMaxLength(10)
                    .IsFixedLength();

                entity.Property(e => e.Price)
                    .HasMaxLength(10)
                    .IsFixedLength();

                entity.Property(e => e.StockExchange)
                    .HasMaxLength(50)
                    .IsFixedLength();

                entity.Property(e => e.Time)
                    .HasMaxLength(10)
                    .IsFixedLength();

                entity.HasOne(d => d.CodeNavigation)
                    .WithMany(p => p.StockPrice)
                    .HasForeignKey(d => d.Code)
                    .HasConstraintName("FK_StockPrice_Company");

                entity.HasOne(d => d.StockExchangeNavigation)
                    .WithMany(p => p.StockPrice)
                    .HasForeignKey(d => d.StockExchange)
                    .HasConstraintName("FK_StockPrice_StockExchange");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
