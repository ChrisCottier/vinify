"""empty message

Revision ID: 20f8aa6f3f18
Revises: 178d60a43f4e
Create Date: 2020-09-13 15:20:11.664197

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '20f8aa6f3f18'
down_revision = '178d60a43f4e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('wines',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=True),
    sa.Column('wine_type', sa.String(length=40), nullable=True),
    sa.Column('avg_price', sa.Integer(), nullable=True),
    sa.Column('vintage', sa.Integer(), nullable=True),
    sa.Column('color', sa.String(length=20), nullable=True),
    sa.Column('verietal', sa.String(length=50), nullable=True),
    sa.Column('description', sa.String(length=2000), nullable=True),
    sa.Column('primary_image', sa.String(length=200), nullable=True),
    sa.Column('country', sa.String(length=50), nullable=True),
    sa.Column('state_province', sa.String(length=80), nullable=True),
    sa.Column('region', sa.String(length=80), nullable=True),
    sa.Column('winery', sa.String(length=80), nullable=True),
    sa.Column('community_rank', sa.String(length=50), nullable=True),
    sa.Column('pairings', sa.String(length=1000), nullable=True),
    sa.Column('photos', sa.String(length=2000), nullable=True),
    sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
    sa.Column('update_at', sa.DateTime(timezone=True), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('wines')
    # ### end Alembic commands ###
